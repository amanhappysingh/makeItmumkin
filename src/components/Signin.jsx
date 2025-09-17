import React, { useState } from 'react';
// import { useMutation } from '@tanstack/react-query';
import { signIn } from '../api/auth';
import { Eye, EyeOff, Mail, Lock, Loader2, User } from 'lucide-react';

export default function Signin() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  // React Query mutation
  // const {
  //   mutateAsync,
  //   isLoading,
  //   isSuccess,
  //   data: signInData,
  //   error,
  //   reset,
  // } = useMutation(signIn, {
  //   onSuccess: (data) => {
  //     console.log('Login success', data);
  //     localStorage.setItem('authToken', data.token);
  //   },
  // });

  const validateForm = () => {
    const errors = {};
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = 'Invalid email address';

    if (!formData.password) errors.password = 'Password is required';
    else if (formData.password.length < 6)
      errors.password = 'Password must be at least 6 characters';

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (validationErrors[name]) {
      setValidationErrors((p) => ({ ...p, [name]: '' }));
    }
    // if (error) reset();
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    reset();
    try {
      await mutateAsync(formData);
    } catch (err) {
      console.error(err);
    }
  };

  if (false) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Welcome {'Aman singh'}</h2>
        <p className="text-gray-600">You are signed in!</p>
        <button
          onClick={() => reset()}
          className="mt-4 px-4 py-2 bg-gray-200 rounded"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <User className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold">Sign In</h1>
        </div>

        {/* {error && (
          <p className="mb-4 text-red-600 text-sm">
            {error.response?.data?.message || error.message}
          </p>
        )} */}

        <div className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                  validationErrors.email ? 'border-red-400 bg-red-50' : 'border-gray-300'
                }`}
                // disabled={isLoading}
              />
            </div>
            {validationErrors.email && (
              <p className="text-xs text-red-500 mt-1">{validationErrors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                  validationErrors.password ? 'border-red-400 bg-red-50' : 'border-gray-300'
                }`}
                // disabled={isLoading}
              />
              <button
                type="button"
                className="absolute right-3 top-2.5"
                onClick={() => setShowPassword(!showPassword)}
                // disabled={isLoading}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {validationErrors.password && (
              <p className="text-xs text-red-500 mt-1">{validationErrors.password}</p>
            )}
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            // disabled={isLoading}
            className="w-full flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
          >
            {false ? <Loader2 className="animate-spin w-5 h-5 mr-2" /> : <Lock className="w-5 h-5 mr-2" />}
            { 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
}
