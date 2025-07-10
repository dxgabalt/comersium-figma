import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator
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
  image?: string;
}

export default function McdonaldsChat() {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¿A que hora viene el pedido?',
      isUser: true,
    },
    {
      id: '2',
      text: 'Aproximadamente en 30 min.',
      isUser: false,
    },
    {
      id: '3',
      text: 'Esta bien, estaré esperando, muchas gracias.',
      isUser: true,
    },
    {
      id: '4',
      text: 'Esta es la foto de su pedido',
      isUser: false,
      image: 'https://api.a0.dev/assets/image?text=McDonald%27s%20Burger&aspect=16:9'
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const handleSend = async () => {
    if (message.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);

    try {
      // Call AI API for response
      const response = await fetch('https://api.a0.dev/ai/llm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: "system", content: "Eres un asistente de McDonald's. Responde de manera amable y concisa. Ofrece información sobre productos, promociones y servicios de McDonald's. Si no sabes algo específico, ofrece alternativas o sugerencias relacionadas con McDonald's." },
            { role: "user", content: message }
          ]
        }),
      });

      const data = await response.json();
      
      // Add AI response
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.completion || "Lo siento, no pude procesar tu solicitud en este momento.",
        isUser: false,
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      // Add error message if API call fails
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Lo siento, estamos experimentando problemas técnicos. Por favor, intenta de nuevo más tarde.",
        isUser: false,
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <ComersiumLogo size="small" color="white" />
        <ComersiumText size="small" color="white" />
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.profileIcon}>
            <Ionicons name="person-circle-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Chat Header */}
      <View style={styles.chatHeader}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.chatTitle}>McDonalds</Text>
        <TouchableOpacity style={styles.moreButton}>
          <Ionicons name="ellipsis-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>
      
      {/* Chat Messages */}
      <ScrollView 
        style={styles.messagesContainer}
        ref={scrollViewRef}
        contentContainerStyle={styles.messagesContent}
      >
        {messages.map((msg) => (
          <View 
            key={msg.id} 
            style={[
              styles.messageBubble, 
              msg.isUser ? styles.userBubble : styles.botBubble
            ]}
          >
            {!msg.isUser && (
              <View style={styles.botAvatar}>
                <View style={styles.botAvatarCircle} />
              </View>
            )}
            <View style={[
              styles.messageContent,
              msg.isUser ? styles.userMessageContent : styles.botMessageContent
            ]}>
              <Text style={[
                styles.messageText,
                msg.isUser ? styles.userMessageText : styles.botMessageText
              ]}>
                {msg.text}
              </Text>
              {msg.image && (
                <Image 
                  source={{ uri: msg.image }} 
                  style={styles.messageImage}
                  resizeMode="cover"
                />
              )}
            </View>
          </View>
        ))}
        {isLoading && (
          <View style={[styles.messageBubble, styles.botBubble]}>
            <View style={styles.botAvatar}>
              <View style={styles.botAvatarCircle} />
            </View>
            <View style={[styles.messageContent, styles.botMessageContent]}>
              <ActivityIndicator size="small" color="#00E5FF" />
            </View>
          </View>
        )}
      </ScrollView>
      
      {/* Message Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribir mensaje"
          placeholderTextColor="#777"
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity 
          style={styles.sendButton}
          onPress={handleSend}
          disabled={message.trim() === '' || isLoading}
        >
          <Ionicons 
            name="send" 
            size={20} 
            color={message.trim() === '' || isLoading ? "#555" : "white"} 
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#1B1B1B',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    marginRight: 15,
  },
  notificationIcon: {},
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#1B1B1B',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  moreButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messagesContainer: {
    flex: 1,
    backgroundColor: 'rgba(18, 18, 18, 0.8)',
  },
  messagesContent: {
    padding: 15,
  },
  messageBubble: {
    flexDirection: 'row',
    marginBottom: 15,
    maxWidth: '80%',
  },
  userBubble: {
    alignSelf: 'flex-end',
  },
  botBubble: {
    alignSelf: 'flex-start',
  },
  botAvatar: {
    width: 40,
    height: 40,
    marginRight: 10,
    justifyContent: 'flex-end',
  },
  botAvatarCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#333',
  },
  messageContent: {
    borderRadius: 18,
    padding: 12,
    maxWidth: '100%',
  },
  userMessageContent: {
    backgroundColor: 'white',
    borderBottomRightRadius: 4,
  },
  botMessageContent: {
    backgroundColor: '#333',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  userMessageText: {
    color: '#121212',
  },
  botMessageText: {
    color: 'white',
  },
  messageImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#1B1B1B',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  input: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: 'white',
    fontSize: 16,
    maxHeight: 100,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#00E5FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});