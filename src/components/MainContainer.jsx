import "../styles/MainContainer.css";


export default function MainContainer({ setShowState, showState }) {
    return (
        <div className='wrapper'>
            <div className="content">
                <div className="line left__line"></div>
                <div className="line right__line"></div>
                <button onClick={ () => setShowState(!showState) } className="location">Norway Park: Барвиха</button>
            </div>
            <div className="content">
                <div className="line left__line"></div>
                <div className="line right__line"></div>
                <button onClick={ () => setShowState(!showState) } className="location">Norway Park: Барвиха</button>
            </div>
            <div className="content">
                <div className="line left__line"></div>
                <div className="line right__line"></div>
                <button onClick={ () => setShowState(!showState) } className="location">Norway Park: Барвиха</button>
            </div>
            <div className="content">
                <div className="line left__line"></div>
                <div className="line right__line"></div>
                <button onClick={ () => setShowState(!showState) } className="location">Norway Park: Барвиха</button>
            </div>
            <div className="content">
                <div className="line left__line"></div>
                <div className="line right__line"></div>
                <button onClick={ () => setShowState(!showState) } className="location">Norway Park: Барвиха</button>
            </div>
            <div className="content">
                <div className="line left__line"></div>
                <div className="line right__line"></div>
                <button onClick={ () => setShowState(!showState) } className="location">Norway Park: Барвиха</button>
            </div>
            <div className="content">
                <div className="line left__line"></div>
                <div className="line right__line"></div>
                <button onClick={ () => setShowState(!showState) } className="location">Norway Park: Барвиха</button>
            </div>
        </div>
    );
}




