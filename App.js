import React, {useState} from 'react';
import {ScrollView, View, Text, TextInput, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Formik } from "formik";
export default async function App() {
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [incomeRange, setIncomeRange] = useState('');
  const [educatonQualification, setEducationQualification] = useState('');
  const [FatherName, setFatherName] = useState('');
  const [MotherName, setMotherName] = useState('');
  const [maritalStatus, setMaritalStatus] = useState(null);
  const [nominee, setNominee] = useState('');
  const [relationship, setRelationship] = useState(null);
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setstate] = useState('');
  const [NomineeAddressline, setnomineeaddressline] = useState('');
  const [percentage, setpercentage] = useState('');




  return (
    <><View style={styles.container}>
          <Text style={styles.text}>
              Let's start by providing <Text style={styles.coloredText}></Text>
          </Text>
      </View><ScrollView contentContainerStyle={styles.scrollContainer}>
              <View style={styles.container}>
              <View style={styles.rectangle}>
            <Text style={styles.boldText}>Your Personal Details <Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>
              <View style={styles.rectangle}>
            <Text style={styles.boldText}>Name on your PRAN Card <Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>
                  <TextInput
                      value={name}
                      placeholder="Enter your name on your pan card" />
                       <View style={styles.rectangle}>
            <Text style={styles.boldText}>Occupation <Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>
                  <TextInput
                      value={setOccupation}
                      placeholder="Business" />
                       <View style={styles.rectangle}>
            <Text style={styles.boldText}>Income Range <Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>
                  <Text style={styles.label}>Income Range:</Text>
                  <TextInput
                      value={incomeRange}
                      editable={false}
                      placeholder="1-5LPA" />
                       <View style={styles.rectangle}>
            <Text style={styles.boldText}>Education Qualification <Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>
                  <Text style={styles.label}>Education Qualification:</Text>
                  <TextInput
                      value={educatonQualification}
                      placeholder="Masters" />
                       <View style={styles.rectangle}>
            <Text style={styles.boldText}>Father's Name <Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>
                  <TextInput
                      onChangeText={text => setFatherName(text)}
                      value={FatherName}
                      placeholder="Enter Father Name" />
                       <View style={styles.rectangle}>
            <Text style={styles.boldText}>Mother's Name <Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>
                  <TextInput
                      onChangeText={text => setMotherName(text)}
                      value={MotherName}
                      placeholder="Enter Mother Name" />
                  <Text style={styles.label}>Marital Status:</Text>
                  <DropDownPicker
                      items={[
                          { label: 'Select', value: null },
                          { label: 'Married', value: 'Married' },
                          { label: 'Unmarried', value: 'Unmarried' },
                      ]}
                      defaultValue={maritalStatus}
                      containerStyle={styles.dropdownContainer}
                      style={styles.dropdownStyle}
                      onChangeItem={item => {
                          console.log('select marital status:', item.value);
                          maritalStatus(item.value);
                      } } />
                  <View style={styles.container} />
                  <Text style={styles.title}>Your Nominee Details</Text>
                  <Text style={styles.label}>NomineeName:</Text>
                  <TextInput
                      style={styles.input}
                      onChangeText={text => setNominee(text)}
                      value={nominee}
                      placeholder="Enter Nominee Name" />
                  <Text style={styles.label}>Relationship:</Text>
                  <DropDownPicker
                      items={[
                          { label: 'Select', value: null },
                          { label: 'Mother', value: 'Mother' },
                          { label: 'Father', value: 'Father' },
                          { label: 'brother', value: 'brother' },
                          { label: 'sister', value: 'sister' },
                      ]}
                      defaultValue={maritalStatus}
                      containerStyle={styles.dropdownContainer}
                      style={styles.dropdownStyle}
                      onChangeItem={item => {
                          console.log('selected Relationship:', item.value);
                          setRelationship(item.value);
                      } } />
                  <Text style={styles.title}>Address Details</Text>
                  <Text style={styles.label}>PIN Code:</Text>
                  <TextInput
                      style={styles.input}
                      value={pincode}
                      onChangeText={text => setPincode(text)}
                      keyboardType="numeric" />
              </View>
              <View>
                  <Text style={styles.label}>Address:</Text>
                  <Text style={styles.addressText} />
              </View>
              <Text style={styles.label}>City:</Text>
                  <DropDownPicker
                      items={[
                          { label: 'Select', value: null },
                          { label: 'Mumbai', value: 'Mumbai' },
                          { label: 'India', value: 'India' },
                      ]}
                      defaultValue={city}
                      containerStyle={styles.dropdownContainer}
                      style={styles.dropdownStyle}
                      onChangeItem={item => {
                          console.log('select city:', item.value);
                          city(item.value);
                      } } />
                       <Text style={styles.label}>Ci</Text>
                  <DropDownPicker
                      items={[
                          { label: 'Select', value: null },
                          { label: 'Maharashtra', value: 'Maharashtra' },
                          { label: 'Pakisthan', value: 'Pakisthan' },
                      ]}
                      defaultValue={State}
                      containerStyle={styles.dropdownContainer}
                      style={styles.dropdownStyle}
                      onChangeItem={item => {
                          console.log('select  state:', item.value);
                          state(item.value);
                      } } />
                           <Text style={styles.label}>Nominee Address line 1*:</Text>
                  <DropDownPicker
                      items={[
                          { label: 'Select', value: null },
                          { label: '#001,Prakruti, Apartment', value: '#001,Prakruti, Apartment' },
                          { label: '#001,Tirupathi', value: '#001,Tirupathi' },
                      ]}
                      defaultValue={Nominee }
                      containerStyle={styles.dropdownContainer}
                      style={styles.dropdownStyle}
                      onChangeItem={item => {
                          console.log('select  state:', item.value);
                          state(item.value);
                      } } />
                       <Text style={styles.label}>Percentage</Text>
                  <DropDownPicker
                      items={[
                          { label: 'Select', value: null },
                          { label: '40%', value: '40%' },
                          { label: '30%', value: '20%' },
                      ]}
                      defaultValue={percentage }
                      containerStyle={styles.dropdownContainer}
                      style={styles.dropdownStyle}
                      onChangeItem={item => {
                          console.log('select  percentage:', item.value);
                          percentage(item.value);
                      } } />
    <View style={styles.rectangle}>
            <Text style={styles.boldText}>Tier || Account Nominee Details <Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>
                  <TextInput
                      value={educatonQualification}
                      placeholder="Masters" />
                      
          </ScrollView></>
  );
}
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  dropdownContainer: {
    height: 40,
    marginBottom: 12,
  },
  dropdownStyle: {
    backgroundColor: '#FAFAFA',
  },
});