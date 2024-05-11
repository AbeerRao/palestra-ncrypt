import Header from "@/components/Header";
import HomeInfo from "@/components/HomeInfo";
import Landing from "@/components/Landing";

export default function Home() {

  const styles = {
    main: "min-h-screen items-center flex flex-col max-w-screen overflow-x-hidden",
    div: "flex w-screen flex-col items-start justify-between main-bg h-[50rem] max-w-screen"
  }

  return (
    <main className={styles.main}>
      <div className={styles.div}>
        <Header />
        <Landing />
      </div>
      <HomeInfo />
    </main>
  );
}
