import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentExperience, xpToNextLevel } = useContext(ChallengesContext);

    const percent = Math.round(currentExperience*100) / xpToNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span>0xp</span>
            <div>
                <div style={{width: `${percent}%`}} />
                <span className={styles.currentExperience} style={{ left: `${percent}%`}}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{xpToNextLevel}xp</span>
        </header>
    );
}