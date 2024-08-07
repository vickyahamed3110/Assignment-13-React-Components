import './App.css';

function Features({model, imgstyle, style, des_content}) {
    return(
        <div className={style}>
            <img src={model.img} style={imgstyle}/>
            <div className={des_content}>
                <h2>{model.name}
                <p>{model.description}</p>
                </h2>
                </div>
                </div>
    );
};

export default Features;