import { LEARN_CATEGORIES, loadCategoryPage } from '@drivingo/data';
import { AlertsIcon, UIButton, UIDividerPoints } from '@drivingo/ui';
import { IonToggle, useIonRouter } from '@ionic/react';
import { useEffect, useState } from 'react';
import './styles/learn-study-detail.scss';

interface LearnContent {
    title: string;
    content: string;
}

const FeatLearnStudyDetail = () => {
    const router = useIonRouter();
    const [pageData, setPageData] = useState<LearnContent | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const pageName = router.routeInfo.pathname.split('/')[4];
    const category = router.routeInfo.pathname.split('/')[3];

    useEffect(() => {
        const loadPage = async () => {
            if (!category || !pageName) return;

            setIsLoading(true);
            try {
                const pageNumber = parseInt(pageName.replace('page', ''));
                const data = await loadCategoryPage(
                    category as any,
                    pageNumber,
                );
                setPageData(data);
            } catch (error) {
                console.error('Error loading page:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadPage();
    }, [category, pageName]);

    if (!category || !pageName) {
        return null;
    }

    const categoryData = LEARN_CATEGORIES.find((cat) => cat.name === category);
    if (!categoryData) {
        return null;
    }

    if (isLoading) {
        return <div className="learn-study-detail">Loading...</div>;
    }

    if (!pageData) {
        return <div className="learn-study-detail">Content not found</div>;
    }

    const currentPageNumber = parseInt(pageName.replace('page', ''));
    const hasNextPage = currentPageNumber < categoryData.pages;
    const hasPrevPage = currentPageNumber > 1;

    const handleNavigation = (direction: 'next' | 'prev') => {
        const newPageNumber =
            direction === 'next'
                ? currentPageNumber + 1
                : currentPageNumber - 1;
        const newPath = `/theory-test/learn/${category}/page${newPageNumber}`;
        router.push(newPath);
    };

    return (
        <div className="learn-study-detail">
            <AlertsIcon />
            <h1 className="title">{pageData.title}</h1>
            <UIDividerPoints />

            <div
                className="learn-study-detail__body"
                dangerouslySetInnerHTML={{ __html: pageData.content }}
            />

            <div className="fixed-bottom-button">
                <div className="learn-study-detail__check">
                    <IonToggle
                        labelPlacement="end"
                        defaultChecked
                        color="success"
                    >
                        I've read this
                    </IonToggle>
                </div>
                <div className="learn-study-detail__actions">
                    {hasNextPage && (
                        <UIButton
                            id="next"
                            fullRounded
                            nextIcon={true}
                            type="secondary"
                            onClick={() => handleNavigation('next')}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default FeatLearnStudyDetail;
