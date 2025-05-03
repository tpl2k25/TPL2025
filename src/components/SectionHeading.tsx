
type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
};

const SectionHeading = ({ 
  title, 
  subtitle, 
  alignment = 'left' 
}: SectionHeadingProps) => {
  return (
    <div className={`mb-8 ${
      alignment === 'center' ? 'text-center' : 
      alignment === 'right' ? 'text-right' : 
      'text-left'
    }`}>
      <h2 className="text-3xl md:text-4xl font-bold text-tpl-navy">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-tpl-gray">{subtitle}</p>
      )}
      <div className={`h-1 w-24 bg-tpl-orange mt-4 ${
        alignment === 'center' ? 'mx-auto' : 
        alignment === 'right' ? 'ml-auto' : 
        ''
      }`}></div>
    </div>
  );
};

export default SectionHeading;
