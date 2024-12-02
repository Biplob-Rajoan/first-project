import { Schema, model, connect } from 'mongoose';
import {
  Student,
  Guardian,
  UserName,
  LocalGuardian,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
  },
  middlleName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

const guardianNameSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
  },
  fatherOccupation: {
    type: String,
  },
  fatherContractNo: {
    type: String,
  },
  motherName: {
    type: String,
  },
  motherOccupation: {
    type: String,
  },
  motherContractNo: {
    type: String,
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
  },
  occupation: {
    type: String,
  },
  contractNo: {
    type: String,
  },
  adress: {
    type: String,
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'], // enam type
  dateOfBirth: { String },
  email: { String },
  contractNo: { String },
  emergencyContractNo: { String },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAdress: { String },
  permanentAdress: { String },
  guardian: guardianNameSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
  isActive: ['active', 'inActive'],
});

export const StudentModel = model<Student>('Student', studentSchema);
