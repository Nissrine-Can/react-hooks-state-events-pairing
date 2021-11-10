import React from "react";


function Header({ link, title, views, date }) {
    return(
        <>
                <iframe
                width="919"
                height="525"
                src={link}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
                />
                <h2>{title}</h2>
                <p>{views} | {date}</p>
      </>
    )
}

export default Header;