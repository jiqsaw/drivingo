export interface UILinkProps {
    text: string;
}

export const UILink = (props: UILinkProps) => {
    const { text } = props;
    return (
        <a href='/' onClick={() => handlePress()}>
            <span>{text}</span>
        </a>
    );
};

function handlePress() {
    console.log('handle press');
}
