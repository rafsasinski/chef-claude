import {Fragment} from 'react';
import chefClaudeIcon from '../assets/images/chef-claude-icon.png'

export default function Header() {
    return (
        <Fragment>
            <header>
                <img src={chefClaudeIcon} alt="test"/>
                <h1>Chef Calude</h1>
            </header>
        </Fragment>
    )
}