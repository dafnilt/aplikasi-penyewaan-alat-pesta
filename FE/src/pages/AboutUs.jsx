import Layout from "../layout/Layout";
import bannerAbout from "../assets/banner-about-us.jpeg";
import team1 from "../assets/team/team-1.jpeg";
import team2 from "../assets/team/team-2.jpeg";
import team3 from "../assets/team/team-3.jpeg";
import team4 from "../assets/team/team-4.jpeg";

function AboutUs() {
  return (
    <Layout>
      <div className="mx-2 md:mx-8">
        <div className="py-10 max-w-screen-md mx-auto">
          <div className="w-max mb-4 px-2 sm:px-10">
            <h1 className="text-2xl font-bold mb-1">Tentang Kami</h1>
            <div className="bg-black w-[65%] h-[2px] rounded-full" />
          </div>
          <p className="text-sm px-2 sm:px-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            hendrerit lacus vitae nisl porta, eget molestie dui ornare.
            Suspendisse quis ipsum non orci condimentum dapibus vel sit amet
            nibh. Nam ac imperdiet eros. Duis tempor, augue ut ornare viverra,
            odio tellus fermentum ex, non venenatis lectus sapien vel diam.
            Etiam et metus porta, ornare quam ut, ultricies sem. Aenean sagittis
            mauris eget neque rutrum, sit amet elementum diam tempor. Nulla
            lacinia euismod tellus vitae ornare. Nunc vitae ornare elit. Etiam
            cursus libero in risus bibendum, id maximus dolor venenatis. Nam
            mollis posuere tristique. Aenean fringilla condimentum magna eu
            fermentum. Nunc non varius est. Morbi sit amet urna massa.
          </p>
        </div>
        <div className="py-10">
          <div
            style={{
              background: `url(${bannerAbout})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="aspect-[4/3] sm:aspect-[16/7] max-w-screen-lg mx-auto lg:rounded-3xl overflow-hidden relative"
          >
            <div className="bg-black/70 absolute inset-0 filter backdrop-blur-[1px] flex justify-center items-center">
              <p className="text-2xl md:text-4xl text-center font-semibold text-white">
                &quot;Solusi lengkap untuk <br className="hidden md:inline" />{" "}
                kesuksesan acara anda&quot;
              </p>
            </div>
          </div>
        </div>
        <div className="py-10 lg:flex items-center max-w-screen-lg mx-auto">
          <div className="mb-10 lg:mb-0 lg:mr-10 px-2 sm:px-10 md:px-20 lg:px-0">
            <div className="mb-10">
              <div className="w-max mb-4">
                <h1 className="text-2xl font-bold mb-1">Visi</h1>
                <div className="bg-black w-[65%] h-[2px] rounded-full" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                hendrerit lacus vitae nisl porta, eget molestie dui ornare.
                Suspendisse quis ipsum non orci condimentum dapibus vel sit amet
                nibh. Nam ac imperdiet eros. Duis tempor, augue ut ornare
                viverra, odio tellus fermentum ex, non venenatis lectus sapien
                vel diam. Etiam et metus porta, ornare quam ut, ultricies sem.
              </p>
            </div>
            <div>
              <div className="w-max mb-4">
                <h1 className="text-2xl font-bold mb-1">Misi</h1>
                <div className="bg-black w-[65%] h-[2px] rounded-full" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                hendrerit lacus vitae nisl porta, eget molestie dui ornare.
                Suspendisse quis ipsum non orci condimentum dapibus vel sit amet
                nibh. Nam ac imperdiet eros. Duis tempor, augue ut ornare
                viverra, odio tellus fermentum ex, non venenatis lectus sapien
                vel diam. Etiam et metus porta, ornare quam ut, ultricies sem.{" "}
              </p>
            </div>
          </div>
          <div className="">
            <img
              src={team1}
              alt="Team Potrait 1"
              className="max-w-80 mx-auto rounded-xl"
            />
            <p className="italic font-thin text-xs text-end p-2">Foto Owner</p>
            <p className="text-center font-bold">Haikal Zimron</p>
          </div>
        </div>
        <div className="lg:flex items-center lg:mb-20 max-w-screen-xl mx-auto">
          <div className="max-w-[500px] lg:max-w-none mx-auto lg:mx-0 lg:w-1/2">
            <div className="relative aspect-square m-2 scale-75">
              <div
                style={{
                  background: `url(${team2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="absolute top-0 left-0 h-[calc(58.333333%-4px)] w-[calc(50%-4px)] rounded-lg"
              ></div>
              <div
                style={{
                  background: `url(${team4})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="absolute top-[calc(58.333333%+4px)] left-0 h-[calc(41.666667%-4px)] w-[calc(50%-4px)] rounded-lg"
              ></div>
              <div
                style={{
                  background: `url(${team3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="absolute top-1/2 -translate-y-1/2 right-0 aspect-[3/4] w-[calc(50%-4px)] rounded-lg"
              ></div>
            </div>
          </div>
          <div className="mt-5 mb-20 lg:m-0 lg:mr-10 px-2 sm:px-10 lg:px-0 max-w-screen-md lg:max-w-none mx-auto lg:w-1/2">
            <div className="w-max mb-4">
              <h1 className="text-2xl font-bold mb-1">Team Kami</h1>
              <div className="bg-black w-[65%] h-[2px] rounded-full" />
            </div>
            <p className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              hendrerit lacus vitae nisl porta, eget molestie dui ornare.
              Suspendisse quis ipsum non orci condimentum dapibus vel sit amet
              nibh. Nam ac imperdiet eros. Duis tempor, augue ut ornare viverra,
              odio tellus fermentum ex, non venenatis lectus sapien vel diam.
              Etiam et metus porta, ornare quam ut, ultricies sem. Aenean
              sagittis mauris eget neque rutrum, sit amet elementum diam tempor.
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              hendrerit lacus vitae nisl porta, eget molestie dui ornare.
              Suspendisse quis ipsum non orci condimentum dapibus vel sit amet
              nibh. Nam ac imperdiet eros. Duis tempor, augue ut ornare viverra,
              odio tellus fermentum ex, non venenatis lectus sapien vel diam.
              Etiam et metus porta, ornare quam ut, ultricies sem. Aenean
              sagittis mauris eget neque rutrum, sit amet elementum diam tempor.
              Nulla lacinia euismod tellus vitae ornare. Nunc vitae ornare elit.
              Etiam cursus libero in risus bibendum, id maximus dolor venenatis.
              Nam mollis posuere tristique. Aenean fringilla condimentum magna
              eu fermentum. Nunc non varius est. Morbi sit amet urna massa.
            </p>
            <div className="font-bold flex flex-nowrap items-center gap-2 sm:gap-4 sm:text-lg">
              <p>Cepat</p>
              <div className="bg-black w-2 sm:w-3 aspect-square rounded-full"></div>
              <p>Efisien</p>
              <div className="bg-black w-2 sm:w-3 aspect-square rounded-full"></div>
              <p>Sesuai Ekspektasi</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
