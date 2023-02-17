import type { Sponsor } from "@/types/sponsors/Sponsor";

export type SponsorType = Sponsor & {
  hasLogo: boolean;
  hasDescription: boolean;
};

const SponsorItem = (sponsor: SponsorType) => {
  return (
    <a href={sponsor.href} key={sponsor.name} target="_blank" rel="noreferrer">
      <div className="flex flex-col overflow-hidden ml-7">
        {sponsor.hasLogo && (
          <div className="flex-shrink-0">
            <picture>
              <img
                className="p-10 object-fit pointer-events-none bg-gray-50"
                src={sponsor.logoUrl}
                alt={sponsor.name}
              />
            </picture>
          </div>
        )}
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <span className="flex items-center gap-x-3">
              <p className="text-xl font-semibold text-gray-900">
                {sponsor.name}
              </p>
              {sponsor.founding && (
                <div>
                  <span className="text-xs border border-green-600 bg-rockyGreen text-white rounded-lg px-2 py-0.5">
                    Founding Sponsor
                  </span>
                </div>
              )}
            </span>
            {sponsor.hasDescription && (
              <p className="mt-3 text-base text-gray-500">
                {sponsor.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

export default SponsorItem;
