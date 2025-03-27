"use client"
import {useInfiniteQuery, useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import * as api from "../services/contactus-apis"
import {AxiosError} from "axios";

export const useAddContactUs = () => {
  return useMutation( api.addContactUs )
}