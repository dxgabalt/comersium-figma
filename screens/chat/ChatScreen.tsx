import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import ComersiumLogo from '../../components/ComersiumLogo';
import ComersiumText from '../../components/ComersiumText';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatScreen() {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy el asistente virtual de Comersium. ¿En qué puedo ayudarte hoy?',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSendMessage = async () => {
    if (message.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setMessage('');
    setIsTyping(true);

    // Simular respuesta de la IA
    try {
      const response = await fetch('https://api.a0.dev/ai/llm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: 'Eres un asistente virtual de Comersium, una plataforma de comercio electrónico. Responde de manera amigable y concisa. Ofrece ayuda sobre productos, pedidos, envíos y promociones. Tu nombre es ComersiumAI.' },
            { role: 'user', content: message },
          ],
        }),
      });

      const data = await response.json();
      
      // Agregar respuesta de la IA
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.completion || 'Lo siento, no pude procesar tu solicitud en este momento.',
        isUser: false,
        timestamp: new Date(),
      };

      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
        setIsTyping(false);
      }, 500);
    } catch (error) {
      console.error('Error al obtener respuesta de la IA:', error);
      
      // Mensaje de error en caso de fallo
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Lo siento, parece que hay un problema de conexión. Por favor, inténtalo de nuevo más tarde.',
        isUser: false,
        timestamp: new Date(),
      };

      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
        setIsTyping(false);
      }, 500);
    }
  };

  // Desplazar al último mensaje cuando se envía uno nuevo
  useEffect(() => {
    if (flatListRef.current && messages.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const renderMessage = ({ item }: { item: Message }) => {
    const messageTime = item.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    return (
      <View style={[styles.messageContainer, item.isUser ? styles.userMessage : styles.aiMessage]}>
        <View style={[styles.messageBubble, item.isUser ? styles.userBubble : styles.aiBubble]}>
          <Text style={[styles.messageText, item.isUser ? styles.userText : styles.aiText]}>
            {item.text}
          </Text>
        </View>
        <Text style={styles.timestamp}>{messageTime}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <ComersiumLogo size="small" color="white" />
          <Text style={styles.headerTitle}>Asistente</Text>
        </View>
        <View style={styles.headerRight} />
      </View>
      
      {/* Chat Messages */}
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesContainer}
      />
      
      {/* Typing Indicator */}
      {isTyping && (
        <View style={styles.typingContainer}>
          <View style={styles.typingBubble}>
            <ActivityIndicator size="small" color="#8942F5" />
            <Text style={styles.typingText}>ComersiumAI está escribiendo...</Text>
          </View>
        </View>
      )}
      
      {/* Message Input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Escribe un mensaje..."
            placeholderTextColor="#999"
            value={message}
            onChangeText={setMessage}
            multiline
          />
          <TouchableOpacity
            style={[styles.sendButton, !message.trim() && styles.disabledSendButton]}
            onPress={handleSendMessage}
            disabled={!message.trim()}
          >
            <Ionicons name="send" size={20} color={message.trim() ? 'white' : '#999'} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#1B1B1B',
  },
  backButton: {
    padding: 5,
  },
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginLeft: 8,
  },
  headerRight: {
    width: 30,
  },
  messagesContainer: {
    padding: 16,
    paddingBottom: 20,
  },
  messageContainer: {
    marginBottom: 16,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
  },
  aiMessage: {
    alignSelf: 'flex-start',
  },
  messageBubble: {
    borderRadius: 16,
    padding: 12,
  },
  userBubble: {
    backgroundColor: '#8942F5',
    borderBottomRightRadius: 4,
  },
  aiBubble: {
    backgroundColor: '#333',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 15,
    lineHeight: 20,
  },
  userText: {
    color: 'white',
  },
  aiText: {
    color: 'white',
  },
  timestamp: {
    fontSize: 11,
    color: '#999',
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  typingContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  typingBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignSelf: 'flex-start',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  typingText: {
    fontSize: 13,
    color: '#ccc',
    marginLeft: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#333',
    backgroundColor: '#1B1B1B',
  },
  input: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    color: 'white',
    maxHeight: 100,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8942F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  disabledSendButton: {
    backgroundColor: '#444',
  },
});