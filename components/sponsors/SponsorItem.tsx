import { useSponsor } from "@/hooks/useSponsor";
import type { SponsorWithTierPerks } from "@/types/sponsors/Sponsor";

const SponsorItem = (staleSponsor: SponsorWithTierPerks) => {
  const { sponsor } = useSponsor(staleSponsor.slug);

  if (!sponsor) {
    return null;
  }

  return (
    <a href={sponsor.href} key={sponsor.name} target="_blank" rel="noreferrer">
      <div className="flex flex-col overflow-hidden ml-7">
        {sponsor.hasLogo && (
          <div className="flex-shrink-0">
            {sponsor.hasDescription ? (
              <picture>
                <img
                  className="p-10 object-fit pointer-events-none bg-gray-50"
                  src={sponsor.logoUrl}
                  alt={sponsor.name}
                />
              </picture>
            ) : (
              <div className="p-10 bg-gray-50 flex justify-center">
                <picture>
                  <img
                    className="w-48 pointer-events-none"
                    src={sponsor.logoUrl}
                    alt={sponsor.name}
                  />
                </picture>
              </div>
            )}
          </div>
        )}
        {sponsor.hasLogo ? (
          <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <span className="flex items-center gap-x-3">
              {sponsor.hasDescription && (
                <p className="text-xl font-semibold text-gray-900">
                  {sponsor.name}
                </p>
              )}
              {sponsor.founding && (
                <div>
                  <span className="text-xs border border-green-600 bg-rockyGreen text-white rounded-lg px-2 py-0.5">
                    Founding Sponsor
                  </span>
                </div>
              )}
            </span>
            {sponsor.hasDescription && (
              <p className="mt-3 text-base text-gray-500 line-clamp-6 hover:line-clamp-none">
                {sponsor.description}
              </p>
            )}
          </div>
        ) : (
          <div className="flex flex-1 flex-col justify-between bg-white">
            <span className="flex items-center justify-center gap-x-3">
              <p className="text-xl font-semibold text-gray-900 bg-gray-50 py-8 px-32">
                {sponsor.name}
              </p>
            </span>
          </div>
        )}
      </div>
    </a>
  );
};

export default SponsorItem;
