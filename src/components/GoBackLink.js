import { Button } from './Button.js';
import { useRouter } from 'next/router';

export const GoBackLink = ({ slug }) => {
    const router = useRouter();
    const currentPage = router.pathname;

    let getBackURL = currentPage.replace(`/${slug}`, '');

    return (
        <>
            <Button
                type='button'
                classname='goBackBtn'
                onClick={() => router.push(getBackURL)}
                text='Go Back'
            />
        </>
    );
};
