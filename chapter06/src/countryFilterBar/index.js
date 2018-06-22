import React from "react";
import PropTypes from "prop-types";
export class CountryFilterBar extends React.PureComponent {
    static propTypes = {
        list: PropTypes.arrayOf(PropTypes.object).isRequired,
        onSelect: PropTypes.func.isRequired
    };

    onSelect(e) {
        this.props.onSelect(e.target.value);
    }

    render() {
        return (
            <div>
                Country:&nbsp;
                <select onChange={this.onSelect.bind(this)}>
                    <option value="">Select a country:</option>
                    {this.props.list.map(x => (
                        <option key={x.code} value={x.code}>
                            {x.name}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}
