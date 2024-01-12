import { Link } from 'lucide-react';

type Props = {
    links: {
        url: string;
        label: string;
    }[];
};

export const Menubar = ({ links }: Props) => {
    return (
        <div>
            {links.map(({ url, label }) => {
                return (
                    <Link href={url} key={url}>
                        <div>{label}</div>
                    </Link>
                );
            })}
        </div>
    );
};
