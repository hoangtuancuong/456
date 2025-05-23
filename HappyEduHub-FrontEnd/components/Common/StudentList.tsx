'use client';

import { callApi } from '@/app/utils/api';
import { processGoogleDriveLink } from '@/app/utils/utils';
import { Slide } from '@mui/material';
import { Carousel } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';

const FeaturedTeachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const response = await callApi(
        'user?limit=6&filter[role]=TEACHER&sort[date_of_birth]=ASC'
      );
      setTeachers(
        response.data.filter((teacher: any) => teacher.additional_teacher_data)
      );
    };
    fetchTeachers();
  }, []);

  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <SectionTitle
        title="GIÁO VIÊN TIÊU BIỂU"
        paragraph="Đội ngũ giáo viên có kinh nghiệm và chất lượng cao chính là cơ sở để SLMS có thể phát triển và mang đến cho học viên những trải nghiệm tuyệt vời nhất."
        center
      />

      <div className="flex items-center justify-center gap-5 h-96 w-1/2 flex-nowrap mx-auto -mt-12">
        <Carousel
          theme={{
            indicators: {
              base: 'h-3 w-3 rounded-full translate-y-10',
              active: {
                off: 'bg-blue-200',
                on: 'bg-blue-500',
              },
            },
            control: {
              base: 'inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-all duration-300',
              icon: 'h-5 w-5 text-white sm:h-6 sm:w-6',
            },
          }}
          pauseOnHover
        >
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="w-[580px] h-80 bg-white shadow-two rounded-sm flex flex-shrink-0 transition-all duration-300 transform hover:shadow-lg hover:scale-105 ease-in-out"
            >
              <div className="w-1/3">
                <img
                  src={processGoogleDriveLink(teacher.avatar_url)}
                  alt={teacher.name}
                  className="w-full rounded-sm h-full object-cover transition-all duration-300"
                />
              </div>
              <div className="w-2/3 p-4 flex flex-col">
                <div className="text-lg font-semibold text-blue-900">
                  {teacher.name}
                </div>

                <p className="text-sm text-gray-700 italic mt-2 flex-grow line-clamp-4 overflow-hidden">
                  &quot;
                  {
                    teacher.additional_teacher_data.portfolio
                      .teaching_philosophy
                  }
                  &quot;
                </p>

                <div className="mt-4 text-sm text-gray-900 font-semibold">
                  GV {teacher.additional_teacher_data.subject.name} -{' '}
                  {teacher.additional_teacher_data.portfolio.school}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="absolute right-0 top-14 z-[-1]">
        <svg
          width="55"
          height="99"
          viewBox="0 0 55 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
          <mask
            id="mask0_94:899"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="99"
            height="99"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#4A6CF7" />
          </mask>
          <g mask="url(#mask0_94:899)">
            <circle
              opacity="0.8"
              cx="49.5"
              cy="49.5"
              r="49.5"
              fill="url(#paint0_radial_94:899)"
            />
            <g opacity="0.8" filter="url(#filter0_f_94:899)">
              <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_94:899"
              x="12.4852"
              y="-15.1763"
              width="82.7646"
              height="82.7646"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="10.5"
                result="effect1_foregroundBlur_94:899"
              />
            </filter>
            <radialGradient
              id="paint0_radial_94:899"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
            >
              <stop stopOpacity="0.47" />
              <stop offset="1" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-24 left-0 z-[-1]">
        <svg
          width="79"
          height="94"
          viewBox="0 0 79 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-41"
            y="26.9426"
            width="66.6675"
            height="66.6675"
            transform="rotate(-22.9007 -41 26.9426)"
            fill="url(#paint0_linear_94:889)"
          />
          <rect
            x="-41"
            y="26.9426"
            width="66.6675"
            height="66.6675"
            transform="rotate(-22.9007 -41 26.9426)"
            stroke="url(#paint1_linear_94:889)"
            strokeWidth="0.7"
          />
          <path
            opacity="0.3"
            d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
            fill="url(#paint2_linear_94:889)"
          />
          <path
            d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
            stroke="url(#paint3_linear_94:889)"
            strokeWidth="0.7"
          />
          <path
            opacity="0.3"
            d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
            fill="url(#paint4_linear_94:889)"
          />
          <path
            d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
            stroke="url(#paint5_linear_94:889)"
            strokeWidth="0.7"
          />
          <defs>
            <linearGradient
              id="paint0_linear_94:889"
              x1="-41"
              y1="21.8445"
              x2="36.9671"
              y2="59.8878"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.62" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_94:889"
              x1="25.6675"
              y1="95.9631"
              x2="-42.9608"
              y2="20.668"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_94:889"
              x1="20.325"
              y1="-3.98039"
              x2="90.6248"
              y2="25.1062"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.62" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_94:889"
              x1="18.3642"
              y1="-1.59742"
              x2="113.9"
              y2="80.6826"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_94:889"
              x1="61.1098"
              y1="62.3249"
              x2="-8.82468"
              y2="58.2156"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.62" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_94:889"
              x1="65.4236"
              y1="65.0701"
              x2="24.0178"
              y2="41.6598"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default FeaturedTeachers;
