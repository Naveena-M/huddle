import React, { PureComponent } from 'react';


class Photos extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { photos: [] }
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/albums/${this.props.id}/photos`)
            .then(response => response.json())
            .then(json => this.setState({ photos: json }))
    }
    render() {
        return (
            <div className="App">
                photos:
                <div>
                    {
                        this.state.photos.map((photo) => {
                            if (photo.id > 1) {
                                return null
                            }
                            return [
                                <p>
                                    {photo.title}
                                    <br/>
                                    <img src={photo.url} />
                                </p>,
                                <br />,
                            ]
                        })
                    }
                </div>


            </div>
        );
    }
}

export default Photos;
