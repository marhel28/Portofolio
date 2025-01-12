/** @type {import('tailwindcss').Config} */
mode: 'jit', // Aktifkan JIT
module.exports = {
  content: ["index.html"],
  theme: {
    container :{
      center:true,
      padding : '16px',
    },
    extend: {
      colors:{
        primer : '#14B8A6',
        dark :'#0F172A',
      },
      boxShadow: {
        neon: '0 0 5px #14B8A6, 0 0 8px #14B8A6, 0 0 10px #14B8A6', // Warna teal neon
      },
      screen:{
        '2xl':'1320px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Tambahkan font Inter
      },
    },
  },
  plugins: [],
}

