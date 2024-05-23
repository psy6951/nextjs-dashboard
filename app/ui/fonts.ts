// woff또는 woff2만 있으면 됨
// 구글폰트는 함수처럼 실행가능
import { Montserrat, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';

// 변수방식 지원하는 구글 폰트(variable): weight 지정 안해도됨
export const montserrat = Montserrat({
  // 영문만 subsest가능
  subsets: ['latin'],
  display: 'swap',
});

// 변수 지원하는 구글폰트: weight 입력해야함
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const pretendard = localFont({
  src: [
    // @경로 사용불가(상대경로만 사용)
    { path: '../../public/fonts/Pretendard-Regular.woff', weight: '400' },
    { path: '../../public/fonts/Pretendard-Medium.woff', weight: '500' },
    { path: '../../public/fonts/Pretendard-Bold.woff', weight: '700' },
  ],
  display: 'swap',
});
