import Header from "@/components/Header";

export default function Home() {

  const styles = {
    main: "min-h-screen items-center flex flex-col",
    div: "flex w-screen flex-row items-start justify-between main-bg h-[50rem]"
  }

  return (
    <main className={styles.main}>
      <div className={styles.div}>
        <Header />
      </div>
    </main>
  );
}
