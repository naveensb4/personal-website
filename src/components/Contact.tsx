// src/components/Contact.tsx
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required')
});

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="container mx-auto p-8 space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg">I'm Naveen Siva. Feel free to reach out to me at:</p>
        <p className="text-lg font-medium">Email: <a href="mailto:ns348@duke.edu" className="text-blue-600 hover:underline">ns348@duke.edu</a></p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg mx-auto">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input {...register('name')} className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500" />
          {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input {...register('email')} className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500" />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea {...register('message')} rows={4} className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500" />
          {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
