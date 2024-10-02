import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendar, FaGraduationCap, FaIdCard, FaUniversity, FaDownload } from 'react-icons/fa';
import Sidebar from './Sidebar';

export default function FacultyProfile() {
  const [profileData, setProfileData] = useState({
    name: 'J SIVAPRAGASAM',
    email: 'sivapragasam@ksrce.ac.in',
    designation: 'Asst. Professor',
    department: 'PHYSICS',
    mobile: '9788197639',
    address: '26, KRS NAGAR, EDAMALAIPATTI PUDUR, TRICHY -620012',
    dateOfJoining: '2008-06-05',
    dateOfBirth: '1983-04-05',
    employeeId: 'CESH31',
    highestQualification: 'M.Sc., M.Phil.,',
    phdStatus: 'Ph.D - Pursuing',
    lastYearFSDScore: '0'
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile data saved:', profileData);
  };

  const fsdScores = [
    { name: 'Admission', score: '10/10' },
    { name: 'Placement', score: '10/10' },
    { name: 'Academic Activities', score: '15/15' },
    { name: 'Ph.D. Activity', score: '10/10' },
    { name: 'Dept. & College Responsibility', score: '5/5' },
    { name: 'Publications', score: '10/10' },
    { name: 'IPR', score: '10/10' },
    { name: 'Consultancy / MoU / Faculty Intenship', score: '10/10' },
    { name: 'Funded Projects', score: '10/10' },
    { name: 'Seminar Grant / ATAL / MOOC', score: '5/5' },
    { name: 'FDP / Conferences', score: '5/5' },
    { name: 'Total Score', score: '100/100' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        
        {/* Main content */}
        <div className="flex-1 overflow-auto">
          <div className="p-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="px-6 py-4 bg-indigo-600 text-white">
                <h3 className="text-xl font-semibold">Faculty Profile</h3>
                <p className="mt-1 text-sm opacity-80">KSRCE Faculty Skill Development Portal</p>
              </div>
              <form onSubmit={handleSubmit} className="p-6">
                <div className="flex flex-col items-center mb-6">
                  <img src="https://via.placeholder.com/150" alt="Profile" className="w-32 h-32 rounded-full object-cover mb-4" />
                  <input type="file" id="photo" name="photo" className="block w-full max-w-xs text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-indigo-50 file:text-indigo-700
                    hover:file:bg-indigo-100
                  "/>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <InputField icon={<FaUser />} label="Name" name="name" value={profileData.name} onChange={handleChange} required />
                  <InputField icon={<FaEnvelope />} label="College Email ID" name="email" value={profileData.email} onChange={handleChange} required />
                  <SelectField icon={<FaUniversity />} label="Designation" name="designation" value={profileData.designation} onChange={handleChange} 
                    options={['Asst. Professor', 'Associate Professor', 'Professor']} required />
                  <InputField icon={<FaPhone />} label="Mobile" name="mobile" value={profileData.mobile} onChange={handleChange} required />
                  <SelectField icon={<FaUniversity />} label="Department" name="department" value={profileData.department} onChange={handleChange} 
                    options={['PHYSICS', 'CHEMISTRY', 'MATHEMATICS', 'COMPUTER SCIENCE']} required />
                  <InputField icon={<FaMapMarkerAlt />} label="Address for Communication" name="address" value={profileData.address} onChange={handleChange} required />
                  <InputField icon={<FaCalendar />} label="Date of Joining" name="dateOfJoining" value={profileData.dateOfJoining} onChange={handleChange} type="date" required />
                  <InputField icon={<FaCalendar />} label="Date of Birth" name="dateOfBirth" value={profileData.dateOfBirth} onChange={handleChange} type="date" required />
                  <InputField icon={<FaIdCard />} label="Employee ID" name="employeeId" value={profileData.employeeId} onChange={handleChange} required />
                  <InputField icon={<FaGraduationCap />} label="Highest Qualification" name="highestQualification" value={profileData.highestQualification} onChange={handleChange} required />
                  <SelectField icon={<FaGraduationCap />} label="Ph.D. Status" name="phdStatus" value={profileData.phdStatus} onChange={handleChange} 
                    options={['Not Pursuing', 'Ph.D - Pursuing', 'Ph.D - Completed']} required />
                  <InputField icon={<FaGraduationCap />} label="Last Year FSD Score" name="lastYearFSDScore" value={profileData.lastYearFSDScore} onChange={handleChange} required />
                </div>
                <div className="mt-6">
                  <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>

            {/* FSD Score Details */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">FSD SCORE DETAILS</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {fsdScores.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{item.name}</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md">{item.score}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-between">
                  <div>
                    <span className="text-sm font-medium text-gray-700 mr-2">Full Report</span>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300">
                      <FaDownload className="inline mr-2" />
                      Download CSV
                    </button>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700 mr-2">Points Report</span>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300">
                      <FaDownload className="inline mr-2" />
                      Download CSV
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({ icon, label, name, value, onChange, type = "text", required = false }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}{required && '*'}</label>
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          {icon}
        </div>
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          required={required}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-2 sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
}

function SelectField({ icon, label, name, value, onChange, options, required = false }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}{required && '*'}</label>
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          {icon}
        </div>
        <select
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          required={required}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-2 sm:text-sm border-gray-300 rounded-md"
        >
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

function NavItem({ title, active }) {
  return (
    <a 
      href="#" 
      className={`block px-6 py-3 text-sm ${
        active 
          ? 'bg-indigo-800 text-white' 
          : 'text-indigo-100 hover:bg-indigo-600 hover:text-white'
      }`}
    >
      <div className="whitespace-normal">{title}</div>
    </a>
  );
}