interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => (
  <h2 className="text-3xl font-semibold text-green-700">{title}</h2>
);

export default SectionTitle;
