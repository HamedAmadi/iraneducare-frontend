"use client"
import {useInfiniteQuery, useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import * as api from "../services/consultation-apis"
import {AxiosError} from "axios";

export const useAddConsultation = () => {
  return useMutation( api.addConsultation )
}