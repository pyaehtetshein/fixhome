interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => (
  <h2 className="text-3xl font-semibold text-green-700 text-center">{title}</h2>
);

export default SectionTitle;
