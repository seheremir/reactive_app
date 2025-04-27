import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';
import { ExternalLink } from 'lucide-react-native';
import Colors from '@/constants/colors';

interface ResourceLinkProps {
  title: string;
  url: string;
}

export default function ResourceLink({ title, url }: ResourceLinkProps) {
  const handlePress = async () => {
    const supported = await Linking.canOpenURL(url);
    
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.error(`Cannot open URL: ${url}`);
    }
  };
  
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <ExternalLink size={16} color={Colors.primary} style={styles.icon} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${Colors.primary}10`,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  text: {
    color: Colors.primary,
    fontWeight: '500',
    fontSize: 14,
  },
});