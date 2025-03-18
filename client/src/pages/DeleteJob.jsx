import React from "react";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const action = async ({ params }) => {
  try {
    const { id } = params;
    await customFetch.delete(`/jobs/${id}`);
    toast.success("Job successfully deleted");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }

  return redirect("/dashboard/all-jobs");
};
