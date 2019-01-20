import "./react-lazy-youtube.scss";

import * as React from "react";

type LazyYoutubeProps = Partial<LazyYoutubeDefaultProps> & {
    id: string;
};

type LazyYoutubeDefaultProps = {
    allowFullscreen: boolean;
    ratio: "16/9" | "4/3";
};

export default class LazyYoutube extends React.PureComponent<LazyYoutubeProps, {}> {
    public static defaultProps: LazyYoutubeDefaultProps = {
        allowFullscreen: true,
        ratio: "16/9"
    };

    private divRef = React.createRef<HTMLDivElement>();

    public componentDidMount() {
        const element = this.divRef.current;
        if (element) {
            const image = new Image();
            image.src = `https://img.youtube.com/vi/${this.props.id}/sddefault.jpg`;
            image.addEventListener("load", () => element.appendChild(image));
        }
    }

    public render() {
        return (
            <div className="react-lazy-youtube">
                <div className="ratio-keeper">
                    <div className="wrapper">
                        <div ref={this.divRef} onClick={this.loadAndPlayVideo.bind(this)} className="youtube">
                            <div className="play-button" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private loadAndPlayVideo() {
        const element = this.divRef.current;
        if (element) {
            const iframe = document.createElement("iframe");

            iframe.setAttribute("src", `https://www.youtube.com/embed/${this.props.id}?rel=0&showinfo=0&autoplay=1`);
            iframe.setAttribute("frameborder", "0");
            if (this.props.allowFullscreen) {
                iframe.setAttribute("allowfullscreen", "");
            }

            element.innerHTML = "";
            element.appendChild(iframe);
        }
    }
}
