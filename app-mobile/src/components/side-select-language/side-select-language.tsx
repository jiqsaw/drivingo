import { translateQuestion } from '@drivingo/db-client';
import { LANGUAGES } from '@drivingo/global';

import {
    storeTheoryActiveTestActions,
    storeTheoryActiveTestSelectors,
    storeUiActions,
    storeUiSelectors,
} from '@drivingo/store';
import { CheckIcon, UIButton, UISearchBox } from '@drivingo/ui';
import { IonMenu } from '@ionic/react';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './side-select-language.scss';
interface SideSelectLanguageProps {
    contentId: string;
    side?: 'start' | 'end';
}

export const SideSelectLanguage: FC<SideSelectLanguageProps> = ({
    contentId,
    side = 'end',
}) => {
    const dispatch = useDispatch();
    const currentQuestion = useSelector(
        storeTheoryActiveTestSelectors.currentQuestion,
    );

    const activeLanguage = useSelector(storeUiSelectors.language);
    const [selectedLanguage, setSelectedLanguage] = useState<string>('');
    const [filteredLanguages, setFilteredLanguages] = useState(LANGUAGES);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            if (!activeLanguage || !currentQuestion) return;
            setLoading(true);
            const response = await translateQuestion(
                activeLanguage as string,
                currentQuestion,
            );
            dispatch(
                storeTheoryActiveTestActions.addTranslate({
                    code: currentQuestion.code,
                    ...response.data.data,
                }),
            );
            setLoading(false);

            const menu = document.querySelector('ion-menu');
            menu && menu.close();
        })();
    }, [activeLanguage]);

    return (
        <IonMenu
            side={side}
            contentId={contentId}
            className="side-select-language"
        >
            <aside className="side-select-language__body">
                <div className="side-select-language__header">
                    <img
                        className="icon"
                        src="assets/images/icon-translate-prefix.svg"
                    />
                    <h3 className="title">Translate</h3>
                </div>
                <div className="side-select-language__content">
                    <p>
                        You have not set your language yet. You can change it
                        later on your profile page.
                    </p>
                    <h4>Which language would you like to translate this to?</h4>

                    <UISearchBox onChange={handleSearch} />
                    <div className="side-select-language__list">
                        {filteredLanguages.map((language) => {
                            return (
                                <button
                                    className={`side-select-language__list-item ${
                                        selectedLanguage === language.code
                                            ? 'side-select-language__list-item--selected'
                                            : ''
                                    }`}
                                    onClick={() => {
                                        setSelectedLanguage(language.code);
                                    }}
                                >
                                    {language.name} ({language.engName})
                                    <span className="side-select-language__list-item-check">
                                        <CheckIcon />
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className="side-select-language__footer">
                    <UIButton
                        text="Translate"
                        fullWidth
                        nextIcon
                        onClick={onSelectLanguageHandler}
                        loading={loading}
                        disabled={!selectedLanguage || loading}
                    ></UIButton>
                    <p>
                        The translation feature is powered by OpenAI. Drivingo
                        is not responsible for their accuracy, completeness, or
                        reliability. Please note that the translations provided
                        should not be fully relied upon.
                    </p>
                </div>
            </aside>
        </IonMenu>
    );

    function handleSearch(searchText: string) {
        const filteredLanguages = LANGUAGES.filter((language) => {
            return (
                language.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                language.engName
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
            );
        });
        setFilteredLanguages(filteredLanguages);
    }

    async function onSelectLanguageHandler() {
        if (selectedLanguage) {
            dispatch(storeUiActions.setLanguage(selectedLanguage));
        }
    }
};
