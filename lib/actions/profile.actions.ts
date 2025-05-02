"use server";

import { Query } from "node-appwrite";
import { databases } from "../appwrite.config";
import {
  DATABASE_ID,
  CLIENT_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  REPAIRAPPOINTMENT_COLLECTION_ID,
} from "../appwrite.config";
import { parseStringify } from "../utils";

// Get user profile and appointments
export const getUserProfileWithAppointments = async (userId: string) => {
  try {
    // Get the user's profile from CLIENT_COLLECTION
    const patientResult = await databases.listDocuments(
      DATABASE_ID!,
      CLIENT_COLLECTION_ID!,
      [Query.equal("userId", [userId])]
    );

    if (!patientResult.documents.length) {
      throw new Error("User profile not found.");
    }

    const profile = patientResult.documents[0];

    // Get the user's appointments from APPOINTMENT_COLLECTION
    const appointmentsResult = await databases.listDocuments(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      [Query.equal("userId", [userId]), Query.orderDesc("$createdAt")]
    );

    return parseStringify({
      profile,
      appointments: appointmentsResult.documents,
    });
  } catch (error) {
    console.error("Error fetching user profile and appointments:", error);
    return null;
  }
};

export const getUserProfileWithRepairAppointments = async (userId: string) => {
  try {
    // Get the user's profile from CLIENT_COLLECTION
    const patientResult = await databases.listDocuments(
      DATABASE_ID!,
      CLIENT_COLLECTION_ID!,
      [Query.equal("userId", [userId])]
    );

    if (!patientResult.documents.length) {
      throw new Error("User profile not found.");
    }

    const profile = patientResult.documents[0];

    // Get the user's appointments from APPOINTMENT_COLLECTION
    const repairappointmentsResult = await databases.listDocuments(
      DATABASE_ID!,
      REPAIRAPPOINTMENT_COLLECTION_ID!,
      [Query.equal("userId", [userId]), Query.orderDesc("$createdAt")]
    );

    return parseStringify({
      profile,
      appointments: repairappointmentsResult.documents,
    });
  } catch (error) {
    console.error("Error fetching user profile and appointments:", error);
    return null;
  }
};

export const updateUserProfile = async (
  userId: string,
  updatedProfile: any
) => {
  try {
    // Check if the user document exists
    const userResult = await databases.listDocuments(
      DATABASE_ID!,
      CLIENT_COLLECTION_ID!,
      [Query.equal("userId", [userId])]
    );

    // If the user profile doesn't exist, throw an error
    if (userResult.documents.length === 0) {
      throw new Error("User profile not found.");
    }

    // Proceed with updating the document
    const updatedUser = await databases.updateDocument(
      DATABASE_ID!,
      CLIENT_COLLECTION_ID!,
      userResult.documents[0].$id, // Use the correct document ID
      updatedProfile
    );

    return updatedUser;
  } catch (error) {
    console.error("An error occurred while updating the user profile:", error);
    throw new Error("Failed to update profile.");
  }
};
