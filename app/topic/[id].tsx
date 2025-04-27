import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useTopicsStore } from '@/store/topicsStore';
import ResourceLink from '@/components/ResourceLink';
import Colors from '@/constants/colors';
import { CheckCircle, Circle, ArrowLeft } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

export default function TopicDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { topics, toggleCompleted } = useTopicsStore();
  
  const topic = topics.find(t => t.id === id);
  
  if (!topic) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Topic not found</Text>
        </View>
      </SafeAreaView>
    );
  }
  
  const handleToggleCompleted = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    toggleCompleted(topic.id);
  };
  
  const difficultyColor = {
    beginner: '#68D391', // Green
    intermediate: '#F6AD55', // Orange
    advanced: '#F56565', // Red
  }[topic.difficulty];
  
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{ 
          title: '',
          headerTintColor: Colors.primary,
          headerLeft: () => (
            <TouchableOpacity 
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <ArrowLeft size={20} color={Colors.primary} />
            </TouchableOpacity>
          ),
        }} 
      />
      <StatusBar style="auto" />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{topic.title}</Text>
            <View style={[styles.difficultyBadge, { backgroundColor: `${difficultyColor}20` }]}>
              <Text style={[styles.difficultyText, { color: difficultyColor }]}>
                {topic.difficulty.charAt(0).toUpperCase() + topic.difficulty.slice(1)}
              </Text>
            </View>
          </View>
          
          <TouchableOpacity 
            style={[
              styles.completionButton,
              topic.completed ? styles.completedButton : styles.pendingButton
            ]}
            onPress={handleToggleCompleted}
            activeOpacity={0.7}
          >
            {topic.completed ? (
              <>
                <CheckCircle size={20} color={Colors.card} style={styles.buttonIcon} />
                <Text style={styles.completedButtonText}>Completed</Text>
              </>
            ) : (
              <>
                <Circle size={20} color={Colors.primary} style={styles.buttonIcon} />
                <Text style={styles.pendingButtonText}>Mark as Completed</Text>
              </>
            )}
          </TouchableOpacity>
        </View>
        
        <View style={styles.contentSection}>
          <Text style={styles.description}>{topic.description}</Text>
        </View>
        
        {topic.resources && topic.resources.length > 0 && (
          <View style={styles.resourcesSection}>
            <Text style={styles.sectionTitle}>Resources</Text>
            {topic.resources.map((resource, index) => (
              <ResourceLink 
                key={index} 
                title={resource.title} 
                url={resource.url} 
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  backButton: {
    padding: 8,
  },
  header: {
    marginBottom: 24,
  },
  titleContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 8,
  },
  difficultyBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  difficultyText: {
    fontSize: 14,
    fontWeight: '500',
  },
  completionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  completedButton: {
    backgroundColor: Colors.success,
  },
  pendingButton: {
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  buttonIcon: {
    marginRight: 8,
  },
  completedButtonText: {
    color: Colors.card,
    fontWeight: '600',
    fontSize: 16,
  },
  pendingButtonText: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 16,
  },
  contentSection: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.text,
  },
  resourcesSection: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 12,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: Colors.textSecondary,
  },
});