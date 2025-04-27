import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/constants/colors';

interface ProgressBarProps {
  progress: number;
  height?: number;
  showPercentage?: boolean;
}

export default function ProgressBar({ 
  progress, 
  height = 8, 
  showPercentage = true 
}: ProgressBarProps) {
  // Ensure progress is between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  
  return (
    <View style={styles.container}>
      <View style={[styles.progressContainer, { height }]}>
        <View 
          style={[
            styles.progressBar, 
            { 
              width: `${clampedProgress}%`,
              height,
            }
          ]} 
        />
      </View>
      {showPercentage && (
        <Text style={styles.progressText}>
          {Math.round(clampedProgress)}% Complete
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
  },
  progressContainer: {
    backgroundColor: Colors.progressBackground,
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
  },
  progressBar: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  progressText: {
    color: Colors.textSecondary,
    fontSize: 12,
    marginTop: 4,
    textAlign: 'right',
  },
});