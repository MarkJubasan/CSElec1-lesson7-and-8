import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import StateOnlyExample from './Storage/StateOnlyExample';
import StorageExample from './Storage/StorageExample';

import WithoutJson from './JSON_S_P/WithoutJson';
import WithJson from './JSON_S_P/WithJson';

import CreateOperation from './CRUD/CreateOperation';
import ReadOperation from './CRUD/ReadOperation';
import UpdateOperation from './CRUD/UpdateOperation';
import DeleteOperation from './CRUD/DeleteOperation';
import { styles } from './styles';

export default function Lesson8Screen () {
  // We use this state simply to tell the Read component when to refresh itself
  // after a Create, Update, or Delete operation finishes.
  const [refreshDatabase, setRefreshDatabase] = useState(0);
  const triggerRefresh = () => setRefreshDatabase(refreshDatabase + 1);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title1}>Local Data Persistence</Text>

                <Text style={styles.text}>
                    Storing JSON Data, CRUD Operations, and AsyncStorage
                </Text>
            </View>

            <StateOnlyExample />
            <StorageExample />

            <WithoutJson />
            <WithJson />

            <View style={styles.section}>
                <Text style={styles.title2}>
                    5. Isolated CRUD Operations
                </Text>

                <Text style={styles.text1}>
                    These 4 files share the exact same database key.
                </Text>

                {/* 'R' is placed first so we can see the data output clearly */}
                <ReadOperation refreshTrigger={refreshDatabase} />

                <CreateOperation onActionComplete={triggerRefresh} />
                <UpdateOperation onActionComplete={triggerRefresh} />
                <DeleteOperation onActionComplete={triggerRefresh} />
            </View>
        </ScrollView>
        
    );
}