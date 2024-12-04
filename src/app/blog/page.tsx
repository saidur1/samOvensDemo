import BlogCard from "./_components/blog-card";

const blogs = [
  {
    id: 1,
    title: "7 Reasons why all consultants should have clients and be rich #1",
    wriiten_by: "Saidur Rahman",
    published: "Oct. 17th 2015",
    thumbnail:
      "https://samovensdemo.com/hosted/images/44/129e013cfe11e782e023068d9967ce/n-RICH-PEOPLE-628x314.jpg",
  },
  {
    id: 2,
    title: "7 Reasons why all consultants should have clients and be rich #1",
    wriiten_by: "Saidur Rahman",
    published: "Oct. 17th 2015",
    thumbnail:
      "https://samovensdemo.com/hosted/images/44/129e013cfe11e782e023068d9967ce/n-RICH-PEOPLE-628x314.jpg",
  },
  {
    id: 3,
    title: "7 Reasons why all consultants should have clients and be rich #3",
    wriiten_by: "Saidur Rahman",
    published: "Oct. 17th 2015",
    thumbnail:
      "https://samovensdemo.com/hosted/images/44/129e013cfe11e782e023068d9967ce/n-RICH-PEOPLE-628x314.jpg",
  },
];

const Page = () => {
  return (
    <div className="mt-[100px] container">
      <div className="grid grid-cols-1 gap-10">
        {blogs?.map(({ id, title, published, thumbnail, wriiten_by }) => (
          <BlogCard
            key={id}
            title={title}
            published={published}
            thumbnail={thumbnail}
            written_by={wriiten_by}
            id={id}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
