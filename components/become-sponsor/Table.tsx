export default function Table() {
    return (
        <>
            <div className="max-w-7xl px-4 sm:px-6 mx-auto mb-24">
                <div className="bg-gradient-to-br from-rockyGreen to-rockyBlue p-3">
                    <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-3">
                        <div className="col-span-1 bg-gray-50 p-4">
                            <h3 className="text-xl font-black font-display">
                                Tier 1
                            </h3>
                            <h3 className="text-2xl font-black font-display">
                                Principal Sponsors
                            </h3>
                            <h3 className="text-2xl font-black font-display">
                                $75,000 / year
                            </h3>
                        </div>
                        <div className="sm:col-span-1 md:col-span-3 bg-gray-50 p-4">
                            <ul className="list-disc ml-4">
                                <li>&quot;Principal Sponsor&quot; level media kit and rights to use trademarks</li>
                                <li>Top placement of Company Logo on Sponsorship page</li>
                                <li>Includes a link to company&apos;s website</li>
                                <li>280 character summary of company</li>
                                <li>Rotating logo/link featured on our main landing page</li>
                                <li>Quote from the RESF leadership team to be included in companies marketing collateral about support for RESF</li>
                                <li>Collaboration with the RESF team on individualized case studies, white papers, webinars, or other material</li>
                                <li>Periodic re-shares and social media engagement for Rocky aligned posts</li>
                            </ul>
                        </div>

                        <div className="col-span-1 bg-gray-50 p-4">
                            <h3 className="text-xl font-black font-display">
                                Tier 2
                            </h3>
                            <h3 className="text-2xl font-black font-display">
                                $50,000 / year
                            </h3>
                        </div>
                        <div className="sm:col-span-1 md:col-span-3 bg-gray-50 p-4">
                            <ul className="list-disc ml-4">
                                <li>&quot;Tier 2&quot; level media kit</li>
                                <li>Inclusion of Company Logo on Sponsorship page</li>
                                <li>Includes a link to company&apos;s website</li>
                                <li>90 character company tagline</li>
                                <li>Quote from the RESF leadership team to be included in companies marketing collateral about support for RESF</li>
                            </ul>
                        </div>

                        <div className="col-span-1 bg-gray-50 p-4">
                            <h3 className="text-xl font-black font-display">
                                Tier 3
                            </h3>
                            <h3 className="text-2xl font-black font-display">
                                $25,000 / year
                            </h3>
                        </div>
                        <div className="sm:col-span-1 md:col-span-3 bg-gray-50 p-4">
                            <ul className="list-disc ml-4">
                                <li>&quot;Tier 3&quot; level media kit</li>
                                <li>Inclusion of Company Logo on Sponsorship page</li>
                                <li>Includes a link to company&apos;s website</li>
                            </ul>
                        </div>

                        <div className="col-span-1 bg-gray-50 p-4">
                            <h3 className="text-xl font-black font-display">
                                Tier 4
                            </h3>
                            <h3 className="text-2xl font-black font-display">
                                $10,000 / year
                            </h3>
                        </div>
                        <div className="sm:col-span-1 md:col-span-3 md:col-span-3 bg-gray-50 p-4">
                            <ul className="list-disc ml-4">
                                <li>&quot;Tier 4&quot; level media kit</li>
                                <li>Inclusion of name in dedicated section on Sponsorship page</li>
                                <li>Includes a link to company&apos;s website</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-right mt-2 italic">
                    <p>All sponsorship levels can be anonymous.</p>
                </div>
            </div>
        </>
    );
}
