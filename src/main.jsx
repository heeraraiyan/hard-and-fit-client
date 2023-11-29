import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {  HelmetProvider } from 'react-helmet-async';

import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProviders from './providers/AuthProviders';
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders>
   <QueryClientProvider client={queryClient}>
   <HelmetProvider>
   <div>
   
   <RouterProvider router={router} />
  </div>
   </HelmetProvider>
   </QueryClientProvider>
   </AuthProviders>
  </React.StrictMode>,
)
