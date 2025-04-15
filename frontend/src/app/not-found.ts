import dynamic from 'next/dynamic';

const PageNotFound = dynamic(() => import('src/pages/PageNotFound'))

export default PageNotFound