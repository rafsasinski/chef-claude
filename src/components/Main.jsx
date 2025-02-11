import {Fragment} from 'react';

export default function Main() {
    return (
        <Fragment>
            <main>
                <form className="ingredient-form">
                    <input type="text" id="ingredient" name="ingredient"
                           placeholder="e.g. oregano" aria-label="Add ingredient"
                    />
                    <button id="ingredientbutton">Add Ingredient</button>
                </form>
            </main>
        </Fragment>
    );
}