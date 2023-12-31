import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Разработка сайтов и приложений, дизайн и продвижение',
  description: 'Разработка сайтов в Новосибирске - хотите получить сайт с индивидуальным дизайном от 10 000 рублей, тогда вы попали по адрессу!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <meta name="keywords" content="Ключевые слова" />
        
        <meta name = "robots" content = "index, follow" />
        <meta name="yandex-verification" content="fa2d4e0a3ba9a121" />
        
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:title" content="Создание сайтов в Новосибирске: заказать разработку сайта, приложения, сложные интернет-магазины. Индивидуальный дизайн и сопровождение"/>
        <meta property="og:description" content="Разработка сайтов в Новосибирске - хотите получить сайт с индивидуальным дизайном от 10 000 рублей, тогда вы попали по адрессу! Самые передовые технологии только у нас!"/>
        <meta property="og:image:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <link rel="stylesheet" href="src/pages/globals.css" type="text/css" media="all" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
