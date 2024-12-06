import { AddressPageContent } from "@/components/address/AddressPageContent";

interface AddressPageProps {
  params: Promise<{ address: string }>;
}

// Generate static params for dynamic routing
export async function generateStaticParams() {
  const addresses = [
    "0x123456789abcdef",
    "0xa1b2c3d4e5f6789",
    "0xdeadbeefdeadbeef",
  ];

  return addresses.map((address) => ({ address }));
}

// Define the dynamic route page component
export default async function AddressPage({ params }: AddressPageProps) {
  const resolvedParams = await params; 
  return <AddressPageContent address={resolvedParams.address} />;
}