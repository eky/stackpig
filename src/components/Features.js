import React from 'react';
import _ from 'lodash';

import {markdownify, Link, safePrefix, classNames} from '../utils';

export default class Features extends React.Component {
    render() {
        return (
            <section class="wrapper style2 special">
                <div class="inner">
                    <header>
                        <h2>{_.get(this.props, 'section.title')}</h2>
                        {markdownify(_.get(this.props, 'section.subtitle'))}
                    </header>
                    <ul class="icons major style2">
                        {_.map(_.get(this.props, 'section.symbol_display'), (symbol, symbol_idx) => (
                        <li key={symbol_idx}><span class={'icon ' + _.get(symbol, 'icon')}><span class="label">{_.get(symbol, 'title')}</span></span></li>))}
                    </ul>
                    {markdownify(_.get(this.props, 'section.content'))}
                    {_.get(this.props, 'section.actions') && 
                        <footer>
                            <ul class="actions special">
                                {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                                    <li key={action_idx}><Link to={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(_.get(action, 'url')))} className={classNames('button', {'primary': _.get(action, 'is_primary')}, {'scrolly': _.get(action, 'is_scrolly')})}>{_.get(action, 'label')}</Link></li>
                                ))}
                            </ul>
                        </footer>
                    }
                </div>
            </section>
        );
    }
}
