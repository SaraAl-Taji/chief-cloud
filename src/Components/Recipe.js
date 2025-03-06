
import ReactMarkdown from 'react-markdown';

export default function Recipe(props){  
  
    return (

        <>
        <section className="suggested-recipe-container container" aria-live='polite'>
            <ReactMarkdown>
                {props.recipe}
            </ReactMarkdown>
            </section>
        </>
    )
}