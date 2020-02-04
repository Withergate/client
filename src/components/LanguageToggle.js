import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withLocalize } from 'react-localize-redux';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

const languagesToReactFlagsCodeMap = {'en': 'GB', 'cs': 'CZ'};
const languagesToLocalizeCodeMap = {'GB': 'en', 'CZ': 'cs'};

class LanguageToggle extends Component {

    componentDidMount() {
        if (localStorage.getItem('lang')) {
            this.props.setActiveLanguage(localStorage.getItem('lang'));
        }
    }

    getLanguageCodes(languages) {
        let codes = [];
        languages.map(lang => codes.push(languagesToReactFlagsCodeMap[lang.code]));
        return codes;
    }

    remapLanguageCode(code) {
        localStorage.setItem('lang', languagesToLocalizeCodeMap[code]);
        this.props.setActiveLanguage(languagesToLocalizeCodeMap[code]);
        window.location.reload(true);
    };

    remapActiveLanguageCode(code) {
        return languagesToLocalizeCodeMap[code];
    };

    getCurrentMapCode() {
        if (localStorage.getItem('lang')) {
            return languagesToReactFlagsCodeMap[localStorage.getItem('lang')];
        }
        return 'GB';
    }

    render() {
        return (
            <ReactFlagsSelect
                defaultCountry={this.props.activeLanguage !== undefined ? 
                    this.remapActiveLanguageCode(this.props.activeLanguage.code) : this.getCurrentMapCode()}
                showSelectedLabel={false}
                showOptionLabel={false}
                countries={this.getLanguageCodes(this.props.languages)}
                onSelect={(code) => this.remapLanguageCode(code)}
            />
        )
    }
};

LanguageToggle.propTypes = {
    languages: PropTypes.array.isRequired,
    activeLanguage: PropTypes.object,
    setActiveLanguage: PropTypes.func.isRequired
};

export default withLocalize(LanguageToggle);