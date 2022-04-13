import './styles.css';
export const SectionContatti = (props) => {

    return <div className="head_contain_section_contatti">
        <h2>{props.title}</h2>

        <div className="input_contain">

            <div className="oggeto">
                <div>Oggetto</div>
                <input type="text" classname="input" id="" />
            </div>

            <div className="messaggio">
                <div>Messaggio</div>
                <textarea class="text_area" id="input" ></textarea>
            </div>

        </div>
    </div>
};
