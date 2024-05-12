import FormItems from "@/components/form-items";

export default function Home() {
  return (
    <section>
      <div className="space-y-3">
        <h1>Home</h1>
        <div className="p-5 border rounded-md ">
          <FormItems />
        </div>
      </div>
    </section>
  );
}
