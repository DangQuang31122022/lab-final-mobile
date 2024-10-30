import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addJob, deleteJob, editJob } from './jobActions';

export default function ToDoScreen() {
  const [jobText, setJobText] = useState('');
  const [editId, setEditId] = useState(null);
  const jobs = useSelector((state) => state.jobs.jobs);
  const dispatch = useDispatch();

  const handleAddJob = () => {
    if (editId) {
      dispatch(editJob(editId, { text: jobText }));
      setEditId(null);
    } else {
      dispatch(addJob({ id: Date.now().toString(), text: jobText }));
    }
    setJobText('');
  };

   const handleEditJob = (job) => {
    setJobText(job.text);
    setEditId(job.id);
  };

  const handleDeleteJob = (id) => {
    dispatch(deleteJob(id));
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter job"
        value={jobText}
        onChangeText={setJobText}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title={editId ? 'Edit Job' : 'Add Job'} onPress={handleAddJob} />
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
            <Text>{item.text}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Button title="Edit" onPress={() => handleEditJob(item)} />
              <Button title="Delete" onPress={() => handleDeleteJob(item.id)} />
            </View>
          </View>
        )}
      />
    </View>
  );
}