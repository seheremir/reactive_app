import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTopicsStore } from '@/store/topicsStore';
import TopicCard from '@/components/TopicCard';
import Colors from '@/constants/colors';
import { Search } from 'lucide-react-native';

export default function TopicsScreen() {
  const { topics } = useTopicsStore();
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredTopics = topics.filter(topic => 
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.searchContainer}>
          <Search size={20} color={Colors.textSecondary} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search topics..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor={Colors.textSecondary}
          />
        </View>
        
        <Text style={styles.title}>All Topics</Text>
        
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>
              No topics found matching "{searchQuery}"
            </Text>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 48,
    color: Colors.text,
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 16,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  emptyStateText: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});