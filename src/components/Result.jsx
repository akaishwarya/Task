

    import React from 'react'
    import { MdOutlineContentCopy } from "react-icons/md";
    import { FiPhoneCall } from "react-icons/fi";
    import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
    import { Navbar } from './Navbar';

    const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
    };

    export const Result = ({sidebarToggle, setSidebarToggle}) => {
    return (
        
        <div className={`${sidebarToggle ? " " : "ml-64"}`}>
        <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
       
        <div className='flex justify-center items-center h-full'>
        <div className='flex flex-col justify-center items-center w-200 p-3 md:mt-6'>
               
               <div className='bg-white justify-center md:px-6 px-4 py-4 rounded-md'>
               <div className='flex flex-col md:flex-row md:flex-nowrap'>
               <div className='w-full md:w-1/2'>
                   <p className='text-sm'>You are more Suitable for</p>
                   <h2 className='font-semibold text-md py-1 md:text-2xl md:py-3'>
                   Association of Chartered <br />Certified Accountant 
                   <span className='text-orange-700'>  (ACCA)</span>
                   </h2>
                   <p className='text-sm'>
                   Association of Chartered Certified Accountants are professionals who are responsible for the financial
                   management of companies, financial reporting, auditing, taxation, and other financial aspects of the
                   business. They have global recognition and are highly sought after in the finance industry for expertise.
                   Join this elite group and make a global impact.
                   </p>
               </div>
   
               {/* Pie chart section */}
                <div className='w-full md:w-1/2'>
                   <ResponsiveContainer width="100%" height={280}>
                   <PieChart width={400} height={400}>
                       <Pie
                       data={data}
                       cx="50%"
                       cy="50%"
                       labelLine={false}
                       label={renderCustomizedLabel}
                       outerRadius={80}
                       fill="#8884d8"
                       dataKey="value"
                       >
                       {data.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                       ))}
                       </Pie>
                   </PieChart>
                   </ResponsiveContainer>
               </div>
               </div>
   
               <div className='flex my-3 md:gap-3 gap-1 '>
               <p className='bg-gray-700 text-sm py-1 md:px-4 px-1 rounded-full inline-flex items-center text-white cursor-pointer'>View course details</p>
               <p className='bg-gray-200 text-sm py-1 md:px-4 px-1 rounded-full inline-flex items-center cursor-pointer'>Consult Assistant<FiPhoneCall className='text-gray-800' /></p>
               <p className='hidden md:bg-gray-200 md:py-1 px-4 md:rounded-full md:inline-flex md:items-center md:cursor-pointer'>Copy URL <MdOutlineContentCopy className='text-gray-800' /></p>
               </div>
           </div>
           </div>
        </div>
       </div> 
      
      
    )
    }

